<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Website with WhatsApp Button</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      font-family: Arial, sans-serif;
      min-height: 2000px; /* just to allow scroll */
      margin: 0;
      padding: 20px;
    }

    /* WhatsApp Floating Button */
    .whatsapp-btn {
      position: fixed;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      text-decoration: none;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      z-index: 99999;
    }

    .whatsapp-btn:hover {
      transform: scale(1.1);
    }
  </style>
</head>

<body>

  <h1>My Website</h1>
  <p>This is a sample page with a floating WhatsApp button.</p>

  <!-- WhatsApp Button -->
  <a href="https://wa.me/919100330272" class="whatsapp-btn" target="_blank">
    💬
  </a>

</body>
</html>
