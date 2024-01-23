
var recentlyItem = document.querySelector(".item-box");

//recently used items
const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" width="99" height="100" viewBox="0 0 99 100" fill="none">
<g filter="url(#filter0_d_31_414)">
  <g clip-path="url(#clip0_31_414)">
    <g filter="url(#filter1_d_31_414)">
      <path d="M53.625 8.25H24.75C22.562 8.25 20.4635 9.11919 18.9164 10.6664C17.3692 12.2135 16.5 14.312 16.5 16.5V82.5C16.5 84.688 17.3692 86.7865 18.9164 88.3336C20.4635 89.8808 22.562 90.75 24.75 90.75H74.25C76.438 90.75 78.5365 89.8808 80.0836 88.3336C81.6308 86.7865 82.5 84.688 82.5 82.5V37.125L53.625 8.25Z" fill="#EAE7E0" fill-opacity="0.7" shape-rendering="crispEdges"/>
      <path d="M53.9786 7.89645C53.8848 7.80268 53.7576 7.75 53.625 7.75H24.75C22.4294 7.75 20.2038 8.67187 18.5628 10.3128C16.9219 11.9538 16 14.1794 16 16.5V82.5C16 84.8206 16.9219 87.0462 18.5628 88.6872C20.2038 90.3281 22.4294 91.25 24.75 91.25H74.25C76.5706 91.25 78.7962 90.3281 80.4372 88.6872C82.0781 87.0462 83 84.8206 83 82.5V37.125C83 36.9924 82.9473 36.8652 82.8536 36.7714L53.9786 7.89645Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
    </g>
    <path d="M53.625 8.25V37.125H82.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</g>
<defs>
  <filter id="filter0_d_31_414" x="-4" y="0" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_414"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_414" result="shape"/>
  </filter>
  <filter id="filter1_d_31_414" x="15.5" y="7.25" width="75.3" height="91.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="4" dy="4"/>
    <feGaussianBlur stdDeviation="1.65"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_414"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_414" result="shape"/>
  </filter>
  <clipPath id="clip0_31_414">
    <rect width="99" height="99" fill="white"/>
  </clipPath>
</defs>
</svg>
`;

for (let i = 0; i < 10; i++) {
    const divElement = document.createElement("div");
    
    divElement.innerHTML = svgCode;

    divElement.style.cursor="pointer"
    
    recentlyItem.appendChild(divElement);
}

//uploaded folders
var all_uploaded = document.querySelector(".uploaded-box");
const imgSrc = "../assets/folderIcon.png";

for (let i = 1; i < 10; i++) {
    const divElement = document.createElement("div");
    const imgElement = document.createElement("img");

    imgElement.src = imgSrc;
    imgElement.alt = "Folder Icon";
    divElement.style.cursor = "pointer";

    const folderName=document.createElement("p");
    folderName.innerHTML=`name ${i}`;
    folderName.style.marginTop="-10px"

    divElement.appendChild(imgElement);
    divElement.appendChild(folderName)

    divElement.style.textAlign="center";
    all_uploaded.appendChild(divElement);
}
