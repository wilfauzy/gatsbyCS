export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'WildanFauzy.com',
  description: 'Stories That Matters',
  coverImage: 'img/about.png',
  logo: 'img/about.png',
  lang: 'id',
  siteUrl: 'https://wildanfauzy.com',
  facebook: 'https://www.facebook.com/wilfauzy',
  twitter: 'https://twitter.com/wilfauzy',
  showSubscribe: true,
  mailchimpAction: 'https://wildanfauzy.us10.list-manage.com/subscribe/post?u=72d29580a7ee388212e8622a5&id=f06aca7400',
  mailchimpName: '72d29580a7ee388212e8622a5&id=f06aca7400',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on GatsbyJS',
};

export default config;
