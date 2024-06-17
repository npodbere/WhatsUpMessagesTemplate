// header image

// Curl to upload an image to whats up
// curl -X POST 'https://graph.facebook.com/v20.0/<PHONE_NUMBER_ID>/media' \
// -H 'Authorization: Bearer <ACCESS_TOKEN>' \
// -F 'file=@"2jC60Vdjn/cross-trainers-summer-sale.jpg"' \
// -F 'type="image/jpeg"' \
// -F 'messaging_product="whatsapp"'

// It returns id for that image
// {
//   "id":"<MEDIA_ID>"
// }

// URL https://graph.facebook.com/v20.0/FROM_PHONE_NUMBER_ID/messages'

// HEADERS
// 'Authorization: Bearer ACCESS_TOKEN'
// 'Content-Type: application/json'

// BODY
//  {
//   "messaging_product": "whatsapp",
//   "recipient_type": "individual",
//   "to": "PHONE_NUMBER",
//   "type": "template",
//   "template": {
//     "name": "TEMPLATE_NAME",
//     "language": {
//       "code": "LANGUAGE_AND_LOCALE_CODE"
//     },
//     "components": [
// {
//   "type": "header",
//   "parameters": [
//     {
//       "type": "image",
//       "image": {
//         "link": Link from image upload endpoint that returns id
//       }
//     }
//   ]
// },
//       {
//         "type": "body",
//         "parameters": [
//           {
//             "type": "text",
//             "text": "TEXT_STRING"
//           },
//           {
//             "type": "currency",
//             "currency": {
//               "fallback_value": "VALUE",
//               "code": "USD",
//               "amount_1000": NUMBER
//             }
//           },
//           {
//             "type": "date_time",
//             "date_time": {
//               "fallback_value": "MONTH DAY, YEAR"
//             }
//           }
//         ]
//       },
//       {
//         "type": "button",
//         "sub_type": "quick_reply",
//         "index": "0",
//         "parameters": [
//           {
//             "type": "payload",
//             "payload": "PAYLOAD"
//           }
//         ]
//       },
//       {
//         "type": "button",
//         "sub_type": "quick_reply",
//         "index": "1",
//         "parameters": [
//           {
//             "type": "payload",
//             "payload": "PAYLOAD"
//           }
//         ]
//       }
//     ]
//   }
// }

export {};
