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
    "image1": WPHeader,
    "image1Details":`#You will see a beautiful header part in this website.
    #A registered user can select a product for ordering.`,
    "image2": WPFooter,
    "image2Details":`#User will see a section, where other users reviewed about us. <br />
    # Besides some Frequently Asked Questions included there.`,
    "image3": WPDashboard,
    "image3Details":`#In this project dashboard has been implemented for users and admins dynamically.`,
  },

  {
    "id": "2",
    "projectName": "Travel Agency",
    "thumbnail": TravelAgencyImage,
    "image1": TAHeader,
    "image1Details":`#You will see a beautiful header part in this website.
    #A registered user can select a product for ordering.`,
    "image2": TAFooter,
    "image2Details":`#User will see a section, where other users reviewed about us. <br />
    # Besides some Frequently Asked Questions included there.`,
    "image3": TAAddPackage,
    "image3Details":`#In this project dashboard has been implemented for users and admins dynamically.`,
  },

  {
    "id": "3",
    "projectName": "Dental Clinic",
    "thumbnail": DentalClinicImage,
    "image1": DCHeader,
    "image1Details":`#You will see a beautiful header part in this website.
    #A registered user can select a product for ordering.`,
    "image2": DCFooter,
    "image2Details":`#You will see a beautiful header part in this website.
    #A registered user can select a product for ordering.`,
    "image3": DCRegister,
    "image3Details":`#You will see a beautiful header part in this website.
    #A registered user can select a product for ordering.`,
  }
];

