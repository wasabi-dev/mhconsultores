PDCookieConsent.config({
          "brand": {
              "dev" : true,
              "name": "MH Consultores Normativos",
              "url" : "https://mhconsultoresnormativos.com",
              "websiteOwner" : ""
             },
            "cookiePolicyLink": "",
            "hideModalIn": [""],
        "styles": { 
            "primaryButton": { 
                "bgColor" : "#A1FFA1", 
                "txtColor": "#036900"},
        "secondaryButton": { 
            "bgColor" : "#EEEEEE",
            "txtColor": "#333333"}
        }});

const banner = document.getElementById('pdcc-modal-accept-all');

function cerrar() {
    banner.addEventListener("click").styles = "display: none"
 }