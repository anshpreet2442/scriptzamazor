  const cssStyles = `
    .container {
      position: relative;
    }

    .menu-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }


    ::selection {
      background-color: #FF2C75;
      color: #fff; /* text color in the selected area */
    }


    .popup {
      position: fixed;
      bottom: 90px;
      right: 20px;
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      z-index: 999;
      transition: opacity 0.3s ease;
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }

    .dropdown {
      margin-bottom: 10px;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .donate-button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = cssStyles;
  document.head.appendChild(style);

  const menuButton = document.createElement('button');
  menuButton.setAttribute('id', 'menuButton');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'Donate';

  const popup = document.createElement('div');
  popup.setAttribute('id', 'popup');
  popup.classList.add('popup', 'hidden');

  const amountSelect = document.createElement('select');
  amountSelect.setAttribute('id', 'amountSelect');
  amountSelect.classList.add('dropdown');

  const amounts = [50, 100, 269, 410, 500, 1000, 1499, 2000, 5000, 10, 20];
  amounts.forEach(amount => {
    const option = document.createElement('option');
    option.setAttribute('value', amount);
    option.textContent = `Rs ${amount}`;
    amountSelect.appendChild(option);
  });

  const donateButton = document.createElement('button');
  donateButton.setAttribute('id', 'donateButton');
  donateButton.classList.add('donate-button');
  donateButton.textContent = 'Donate';

  popup.appendChild(amountSelect);
  popup.appendChild(donateButton);

  document.body.appendChild(menuButton);
  document.body.appendChild(popup);

  menuButton.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  donateButton.addEventListener('click', () => {
    const amount = amountSelect.value;
    const upiLink = `upi://pay?pa=kaur109@paytm&pn=YourName&am=${amount}&cu=INR&tn=spotdll%20special`;
    window.location.href = upiLink;
  });

  document.addEventListener('click', (event) => {
    if (!popup.contains(event.target) && event.target !== menuButton) {
      popup.classList.add('hidden');
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
            var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
            if(disclaimer) {
                disclaimer.remove();
            }
        });


  // Create meta viewport tag
  var metaViewport = document.createElement('meta');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
  
  // Create meta theme-color tag
  var metaThemeColor = document.createElement('meta');
  metaThemeColor.setAttribute('name', 'theme-color');
  metaThemeColor.setAttribute('content', '#FFA500');
  
  // Create link tag for favicon
  var linkFavicon = document.createElement('link');
  linkFavicon.setAttribute('rel', 'icon');
  linkFavicon.setAttribute('type', 'image/x-icon');
  linkFavicon.setAttribute('href', 'https://cdn-icons-png.flaticon.com/128/3059/3059997.png');
  
  // Append created elements to the document head
  document.head.appendChild(metaViewport);
  document.head.appendChild(metaThemeColor);
  document.head.appendChild(linkFavicon);
  
  
  
  
    // Create meta description tag
  var metaDescription = document.createElement('meta');
  metaDescription.setAttribute('name', 'description');
  metaDescription.setAttribute('content', 'Page by Anshpreet');
  
  // Append the meta description element to the document head
  document.head.appendChild(metaDescription);