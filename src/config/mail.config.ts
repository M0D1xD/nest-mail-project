import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { ConfigService } from '@nestjs/config';

export const mailerConfig: MailerAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    transport: {
      host: config.get('MAIL_HOST'),
      port: Number(config.get('MAIL_PORT')),
      tls: {
        ciphers: 'SSLv3',
      },
      secure: config.get<boolean>('MAIL_SECURITY'),
      auth: {
        user: config.get('MAIL_USER'),
        pass: config.get('MAIL_PASSWORD'),
      },
    },
    defaults: {
      from: `no-reply <${config.get('MAIL_FROM')}>`,
    },
  }),
};
