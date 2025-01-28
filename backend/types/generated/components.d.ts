import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsClient extends Struct.ComponentSchema {
  collectionName: 'components_components_clients';
  info: {
    displayName: 'Client';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface ComponentsIconCard extends Struct.ComponentSchema {
  collectionName: 'components_components_icon_cards';
  info: {
    description: '';
    displayName: 'IconCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_info_cards';
  info: {
    description: '';
    displayName: 'Info card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    read_more: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsCardsBox extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_boxes';
  info: {
    displayName: 'CardsBox';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.info-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsClients extends Struct.ComponentSchema {
  collectionName: 'components_sections_clients';
  info: {
    description: '';
    displayName: 'Clients';
  };
  attributes: {
    clients: Schema.Attribute.Component<'components.client', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDetailBox extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_boxes';
  info: {
    description: '';
    displayName: 'DetailBox';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGoToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_go_to_actions';
  info: {
    displayName: 'GoTo Action';
  };
  attributes: {
    goTo: Schema.Attribute.Component<'components.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsKeyMetrics extends Struct.ComponentSchema {
  collectionName: 'components_sections_key_metrics';
  info: {
    displayName: 'KeyMetrics';
    icon: 'bulletList';
  };
  attributes: {
    metrix: Schema.Attribute.Component<'components.icon-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMain extends Struct.ComponentSchema {
  collectionName: 'components_sections_mains';
  info: {
    description: '';
    displayName: 'main';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsManageCommunity extends Struct.ComponentSchema {
  collectionName: 'components_sections_manage_communities';
  info: {
    displayName: 'Manage community';
    icon: 'dashboard';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.icon-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.String;
    customers: Schema.Attribute.Media<'images' | 'files', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    position: Schema.Attribute.String;
    testomonial: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.client': ComponentsClient;
      'components.icon-card': ComponentsIconCard;
      'components.info-card': ComponentsInfoCard;
      'components.link': ComponentsLink;
      'sections.cards-box': SectionsCardsBox;
      'sections.clients': SectionsClients;
      'sections.detail-box': SectionsDetailBox;
      'sections.go-to-action': SectionsGoToAction;
      'sections.key-metrics': SectionsKeyMetrics;
      'sections.main': SectionsMain;
      'sections.manage-community': SectionsManageCommunity;
      'sections.testimonials': SectionsTestimonials;
    }
  }
}
