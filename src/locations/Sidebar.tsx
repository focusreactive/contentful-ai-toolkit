import { SidebarAppSDK } from '@contentful/app-sdk';
import { useAutoResizer, useSDK } from '@contentful/react-apps-toolkit';
import { initSDK as initAiSdk } from '@focus-reactive/contentful-ai-sdk';
import ContentLayout from '../actions/toolkit/components/ContentLayout';
import { useEffect } from 'react';
import { Note, Stack, TextLink } from '@contentful/f36-components';
import { AppInstallationParameters } from '../types';
import { SUPPORT_EMAIL } from '@/constants/globalConfig';

const Sidebar = () => {
  useAutoResizer();

  const sdk = useSDK<SidebarAppSDK>();
  const parameters = sdk.parameters.installation as AppInstallationParameters | null;

  const token = parameters?.openAiToken;
  if (!token) {
    return <Note variant="negative">Open AI token is not set</Note>;
  }

  useEffect(() => {
    initAiSdk({ client: sdk.cma, openAiKey: token });
  }, [sdk.cma, token]);

  return (
    <Stack
      flexDirection="column"
      spacing="spacingS"
    >
      <ContentLayout />
      <TextLink href={`mailto:${SUPPORT_EMAIL}`}>Contact support</TextLink>
      {!parameters?.openAiToken && (
        <Note style={{ width: '100%' }}>
          You are using default OpenAI token, functionality is limited.
        </Note>
      )}
    </Stack>
  );
};

export default Sidebar;
