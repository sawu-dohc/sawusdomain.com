// Array of icon data
class Icon {

    constructor(id, className, imgSrc, title, link, description) {

      this.id = id;
      this.className = className;
      this.imgSrc = imgSrc;
      this.title = title;
      this.link = link;
      this.description = description;
    }

    // Method to generate the HTML for the icon
    createElement() {

      const iconDiv = document.createElement("div");
      iconDiv.id = this.id;
      iconDiv.className = this.className;

      const linkElement = document.createElement("a");
      linkElement.href = this.link;

      const imgElement = document.createElement("img");
      imgElement.src = this.imgSrc;
      imgElement.alt = this.title;
      imgElement.className = "siteObject-img";

      const titleElement = document.createElement("h2");
      titleElement.textContent = this.title;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = this.description;

      linkElement.appendChild(imgElement);
      iconDiv.appendChild(linkElement);
      iconDiv.appendChild(titleElement);
      iconDiv.appendChild(descriptionElement);

      return iconDiv;
    }

}

const iconData = [

    new Icon("myComputerIcon", "Icon", "Home_Assets/myComputerWindows95.png", "My Computer", "#", "Rig specs with links!"),

    new Icon("readMeIcon", "Icon", "Home_Assets/textFile.png", "ReadMe.txt", "#", "Welcome message."),

    new Icon("JavaFolderIcon", "Icon Link", "Home_Assets/windows95_fileIcon.png", "Java Projects", "https://github.com/sawu-dohc/Java-Projects.git", "All of my java projects on git hub."),

    new Icon("CfolderIcon", "Icon Link", "Home_Assets/windows95_fileIcon.png", "C++ Projects", "https://github.com/sawu-DOHC/C-Projects.git", "All of my C++ projects on git hub."),

    new Icon("javaScriptFolderIcon", "Icon", "Home_Assets/windows95_fileIcon.png", "JavaScript", "#", "These are HTML pages that are meant to demonstrate JavaScript functionalities."),

    new Icon("HTMLfolderIcon", "Icon", "Home_Assets/windows95_fileIcon.png", "HTML Projects", "#", "Static web pages that rely heavily on CSS with a little bit of JavaScript."),

    new Icon("webApplicationsFolderIcon", "Icon", "Home_Assets/windows95_fileIcon.png", "Web Apps", "#", "These projects utilize HTML, CSS, JavaScript, PHP, and an SQL database."),

    new Icon("recycleBinIcon", "Icon", "Home_Assets/recycleBinEmpty.png", "Recycle Bin", "#", ""),

    new Icon("eMailIcon", "Icon Link", "Home_Assets/electronicMail.png", "E-Mail", "mailto:wusaDOHC@gmail.com", "Send me an email!")

  ];
  
  const desktop = document.getElementById("desktop");
  
  iconData.forEach( icon => {

    desktop.appendChild( icon.createElement() );

  });
  