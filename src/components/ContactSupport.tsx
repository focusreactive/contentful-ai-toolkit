import { SUPPORT_EMAIL } from '@/constants/globalConfig';
import { Note, Paragraph, Text, TextLink } from '@contentful/f36-components';

const ContactSupport = ({ message }: { message: string }) => {
  return (
    <Note
      variant="negative"
      title="Unexpected Error"
    >
      <Paragraph>
        If the issue persists, please contact{' '}
        <TextLink href={`mailto:${SUPPORT_EMAIL}`}>support</TextLink> with the following details:
      </Paragraph>
      {/* <br /> */}
      <Text
        as="code"
        isWordBreak
        fontStack="fontStackMonospace"
        fontSize="fontSizeS"
        fontColor="red600"
      >
        {message}
      </Text>
    </Note>
  );
};

export default ContactSupport;
