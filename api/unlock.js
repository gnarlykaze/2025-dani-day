export default function handler(req, res) {
  const { password } = req.query;

  // 🔑 Set your secret password here
  const correctPassword = "oyahoisreal727";

  if (password === correctPassword) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}
