import { AppState, ConfigAppSDK } from '@contentful/app-sdk';
import { FormControl, Stack, TextInput } from '@contentful/f36-components';
import { useSDK } from '@contentful/react-apps-toolkit';
import { useEffect, useState } from 'react';
import { AppInstallationParameters } from '../types';
import fetchDemoToken from '@/api/fetchDemoToken';

const ConfigScreen = () => {
  const sdk = useSDK<ConfigAppSDK>();

  const [parameters, setParameters] = useState<Pick<AppInstallationParameters, 'openAiToken'>>({
    openAiToken: '',
  });

  const onConfigure = async (): Promise<{
    parameters: AppInstallationParameters;
    targetState: AppState | null;
  }> => {
    const [openAiToken, currentState] = await Promise.all([
      parameters.openAiToken || fetchDemoToken(sdk.user.sys.id),
      sdk.app.getCurrentState(),
    ]);

    return {
      // Parameters to be persisted as the app configuration.
      parameters: {
        openAiToken,
        usageMode: parameters.openAiToken ? 'custom-token' : 'demo',
      },
      // In case you don't want to submit any update to app
      // locations, you can just pass the currentState as is
      targetState: currentState,
    };
  };

  useEffect(() => {
    async function init() {
      const parameters = await sdk.app.getParameters();
      if (parameters) {
        setParameters(parameters as AppInstallationParameters);
      }

      sdk.app.setReady();
    }

    init();
  }, [sdk]);

  useEffect(() => {
    sdk.app.onConfigure(onConfigure);
  }, [sdk, onConfigure]);

  return (
    <Stack
      flexDirection="column"
      spacing="spacingS"
      marginTop="spacingL"
    >
      <FormControl>
        <FormControl.Label>OpenAI Token</FormControl.Label>
        <TextInput
          value={parameters.openAiToken}
          type="password"
          autoComplete="off"
          name="openAiToken"
          onChange={(e) => setParameters({ ...parameters, openAiToken: e.target.value })}
        />
        <FormControl.HelpText>
          Optional.
          <br />
          Enter your OpenAI token. If left blank, a shared default token will be used, which may be
          subject to rate limits.
        </FormControl.HelpText>
      </FormControl>
    </Stack>
  );
};

export default ConfigScreen;
