export default class HubspotApi {
  constructor() {
    this.baseUrl = 'https://api.hsforms.com/submissions/v3/integration/submit';
    this.portalId = '5292269';
    this.formGuid = '5c5dac57-5138-466e-b8f3-d82b49cea0a1';
  }

  addContact = (formData) => {
    const postData = {
      fields: [
        {
          name: 'email',
          value: formData.email,
        },
        {
          name: 'message',
          value: formData.message,
        },
        {
          name: 'contact_type',
          value: formData.contactType,
        },
        {
          name: 'lifecyclestage',
          value: 'subscriber',
        },
      ],
    };

    return fetch(`${this.baseUrl}/${this.portalId}/${this.formGuid}`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => response)
      .catch((error) => {
        console.error('Error:', error);
        return error;
      });
  };
}
