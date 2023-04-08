import customUiLib from 'custom-ui-lib';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  customUiLib();
  res.status(200).json({ name: 'John Doe' })
}
