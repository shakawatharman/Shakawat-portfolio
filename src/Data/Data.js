import WoodpeckerImage from "../../src/Resources/woodpecker_thumbnail.jpg";
import TravelAgencyImage from "../../src/Resources/travel agency thumbnail.jpg";
import DentalClinicImage from "../../src/Resources/dental clinic thumbnail.jpg";
import DCHeader from "../../src/Resources/dental clinic header.png";
import DCFooter from "../../src/Resources/dental clinic footer.png";
import DCRegister from "../../src/Resources/dental clinic register.png";
import TAHeader from "../../src/Resources/travel agency header.png";
import TAFooter from "../../src/Resources/travel agency footer.png";
import TAAddPackage from "../../src/Resources/travel agency add package.png";
import WPHeader from "../../src/Resources/woodpecker header.png"
import WPFooter from "../../src/Resources/woodpecker footer.png"
import WPDashboard from "../../src/Resources/woodpecker dashboard.png"


export const projectData = [
  {
    "id": "1",
    "projectName": "Woodpecker",
    "thumbnail": WoodpeckerImage,
    "livesite":"https://woodpecker-a3360.web.app/",
    "client":"https://github.com/shakawatharman/woodpecker-client",
    "server":"https://github.com/shakawatharman/woodpecker-server",
    "image1": WPHeader,
    "image1Details1":`You will see a beautiful header part in this website.A registered user can select a product for ordering.` ,
    "image1Details2":`If an unregistered user try to purchase a product, this user will be redirected to login page. After logging in successfully, user will be able to go to purchase page.`,
    "image2": WPFooter,
    "image2Details1":` User will see a section, where other users reviewed about us.
      Besides some Frequently Asked Questions included there.`, 
      "image2Details2":`Moreover a registered user will be able to review us and this review will be added on homepage dynamically.`,
    "image3": WPDashboard,
    "image3Details1":` In this project dashboard has been implemented for users and admins dynamically.`,
    "image3Details2":`If an admin log in to this website, he will be able to change order status and also can shared adminstration with a user.`,
  },

  {
    "id": "2",
    "projectName": "Tour Planners",
    "thumbnail": TravelAgencyImage,
    "livesite":"https://travel-agency-e8214.web.app/",
    "client":"https://github.com/shakawatharman/Travel-agency",
    "server":"https://github.com/shakawatharman/travel-agency-server",
    "image1": TAHeader,
    "image1Details1":`You will see a beautiful header part in this website.A registered user can book a package.` ,
    "image1Details2":`If an unregistered user try to book a package, this user will be redirected to login page. After logging in successfully, user will be able to go to booking page.`,
    "image2": TAFooter,
    "image2Details1":`In this section, user will see some images. Users may influenced to visit these places.`, 
    "image2Details2":`If a user influenced to visit there after seeing these images, they may choose us to arrange their everything.`,
    "image3": TAAddPackage,
    "image3Details1":`This section is for some random survey. User also can add a package there. Though we have different plan to organize this section later.`,
    "image3Details2":`You can visit my website, so that you can see how these work actually. Website link has been given below.`
  },

  {
    "id": "3",
    "projectName": "Dental Clinic",
    "thumbnail": DentalClinicImage,
    "livesite":"https://dental-clinic-1ebcb.web.app/",
    "client":"https://github.com/shakawatharman/Dental_Clinic",
    "server":"https://github.com/shakawatharman/Dental_Clinic",
    "image1": DCHeader,
    "image1Details1":`You will see a beautiful header part in this website.A registered user can see the details of our service` ,
    "image1Details2":`If an unregistered user try to see the details, this user will be redirected to login page. After logging in successfully, user will be able to go to details page.`,
    "image2": DCFooter,
    "image2Details1":`In this section, user will see the images of our dentist. Besides an appointment form too. If a registered user want to take our service, he/she may fill up the form.`, 
    "image2Details2":` But these functionality hasn't been implemented yet as it is not connected with database. It will be implemented very soon.`,
    "image3": DCRegister,
    "image3Details1":`User may register via google there. Besides email registering system is also available there.`,
    "image3Details2":`For more queries, you can visit this website. Link has been given below...`
  }
];

