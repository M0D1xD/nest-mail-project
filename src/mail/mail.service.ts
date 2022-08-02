import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(toEmail: string, html: string, subject: string = '') {
    const sentEmail = await this.mailerService.sendMail({
      to: toEmail,
      subject,
      html,
    });
    return sentEmail;
  }
}
