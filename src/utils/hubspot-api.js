export default class HubspotApi {
  constructor() {
    // 'https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid'
    this.baseUrl = 'https://api.hsforms.com/submissions/v3/integration/submit';
    this.portalId = '5292269';
    this.formGuid = '5c5dac57-5138-466e-b8f3-d82b49cea0a1';
  }

  addContact = (formData) => {
    console.log('formData');
    console.log(formData);

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
          value: 'Client',
        },
        {
          name: 'lifecyclestage',
          value: 'sub-scriber',
        },
      ],
    };

    fetch(`${this.baseUrl}/${this.portalId}/${this.formGuid}`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };
}

// {
//   "submittedAt": "1517927174000",
//   "fields": [
//     {
//       "name": "email",
//       "value": "example@example.com"
//     },
//     {
//       "name": "lastname",
//       "value": "Example Lastname"
//     },
//     {
//       "name":"multiple_checkbox_property",
//       "value":"option_1;option2"
//     },
//     {
//       "name":"date_property",
//       "value":1520985600000
//     },
//     {
//       "name":"checkbox_property",
//       "value":"true"
//     }
//   ],
//   "context": {
//     "hutk": "3aea3ab5985f7bc544e847d1f76b5857",
//     "pageUri": "www.example.com/page",
//     "ipAddress": "1.1.1.1",
//     "pageName": "Example page",
//     "sfdcCampaignId": "70150000000T85uAAC"
//   },
//   "skipValidation": false
// }
