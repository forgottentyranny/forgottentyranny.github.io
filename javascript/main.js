let MainContainer = document.createElement("div");
MainContainer.classList.add("main_container");
let Header = document.createElement("div");
Header.classList.add("main_items");
Header.classList.add("header");
MainContainer.appendChild(Header);
let ProfilePictureWText = document.createElement("div");
ProfilePictureWText.classList.add("header_items");
Header.appendChild(ProfilePictureWText)
let ProfilePicture = document.createElement("img");
ProfilePicture.classList.add("profile_picture");
ProfilePicture.src = "..\\images\\profile_picture.png";
ProfilePicture.height = 200;
ProfilePicture.width = 200;
ProfilePictureWText.appendChild(ProfilePicture);
let ProfileText = document.createElement("p");
ProfileText.innerHTML = "Profile Picture Placeholder";
ProfilePictureWText.appendChild(ProfileText);
document.body.appendChild(MainContainer);
