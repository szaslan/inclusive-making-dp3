export const MACHINES = {
  glowforgepro: {
    name: "Glowforge Pro",
    info:
      "The Glowforge is a desktop laser cutter. It is easy to use and has convenient features like automatic material recognition and a passthrough slot for engraving and cutting materials of any length. The Garage offers various materials for use with the Glowforge, such as acrylic, MDF, and wood.",
    picture:
      "https://thegarage.northwestern.edu/wp-content/uploads/2018/02/6ab67f0a.png",
    route: "glowforgepro",
    safety_info: {
      gear: [],
      hazards: [
        {
          info: "Fire can arise from improper cleaning.",
          icon: "https://image.flaticon.com/icons/svg/645/645694.svg",
          alt: "Fire Extinguisher"
        },
        {
          info: "Never leave the Glowforge unattended.",
          icon: "https://image.flaticon.com/icons/svg/617/617064.svg",
          alt: "Person"
        },
        {
          info: "Make sure ventilation is on.",
          icon: "https://image.flaticon.com/icons/svg/1692/1692837.svg",
          alt: "Fan"
        }
      ],
      quote: {
        name: "Marcelo Worsley",
        text: "No more snacks if you break this or hurt yourself!"
      }
    }
  },
  form2: {
    name: "Form 2",
    route: "form2",
    picture:
      "https://thegarage.northwestern.edu/wp-content/uploads/2017/04/Form.png",
    info:
      "The Formlabs Form 2 is a stereolithography (SLA) 3D printer, which uses a UV laser to cure liquid resin into solid resin. This process results in incredibly precise and smooth prints with layers as small as 25 microns. The Garage has two Form 2 printers and seven types of resin: white, grey, black, clear, tough, durable, and flexible.",
    safety_info: {
      gear: ["Latex Gloves"],
      hazards: [
        {
          info:
            "Never ingest the resin in liquid or solid form. It's poisonous.",
          icon: "https://image.flaticon.com/icons/svg/604/604684.svg",
          alt: "Poison Bottle"
        },
        {
          info: "Make sure you work in a ventilated area.",
          icon: "https://image.flaticon.com/icons/svg/1692/1692837.svg",
          alt: "Fan"
        },
        {
          info: "Keep sharp tools pointed away from your body",
          icon: "https://image.flaticon.com/icons/svg/363/363397.svg",
          alt: "Knife"
        }
      ],
      quote: {
        name: "Michelle",
        text: "I stuck my hand in there once and the resin stuck for a week."
      }
    }
  },
  makerbotreplicator: {
    name: "Makerbot Replicator 5th Gen",
    route: "makerbotreplicator",
    info:
      "The Makerbot Replicator is an easy-to-use 3D printer. It uses the common FDM technique, which extrudes melted plastic filament through a nozzle to build 3D objects layer by layer. The Replicator is recommended for first-time 3D printer users. The Garage offers 10 colors of PLA plastic filament for the Replicator, which hang above the printer."
  },
  makerbotz18: {
    name: "Makerbot Z18",
    route: "makerbotz18",
    info:
      "The Makerbot Replicator Z18 is an FDM 3D printer with the largest build volume at The Garage. It can print objects up to a foot long and wide, and up to 18 inches tall. The Garage offers 10 colors of PLA plastic filament for the Z18, which hang above the printer."
  },
  carvey: {
    name: "Carvey",
    route: "carvey",
    picture:
      "https://thegarage.northwestern.edu/wp-content/uploads/2017/03/Carvey.png",
    info:
      "The Carvey by Inventables is a fully enclosed desktop CNC mill. It uses a carving bit to cut through material in layers. CNC mills are used to carve objects out of wood, plastics, and other softer materials. The Carvey is notable for its automated Z-axis calibration, PCB milling capabilities, and easy-to-use software. The Garage has two Carveys and various materials for use with them, such as acrylic, MDF, and wood.",
    safety_info: {
      gear: ["Safety Glasses"],
      hazards: [
        {
          info: "Make sure you work in a ventilated area.",
          icon: "https://image.flaticon.com/icons/svg/1692/1692837.svg",
          alt: "Fan"
        },
        {
          info: "Always clamp the material securely.",
          icon: "https://image.flaticon.com/icons/svg/465/465513.svg",
          alt: "Clamp"
        },
        {
          info: "Never leave the Carvey unattended.",
          icon: "https://image.flaticon.com/icons/svg/617/617064.svg",
          alt: "Person"
        }
      ],
      quote: {
        name: "Gabe",
        text: "Always gotta check the drill bit."
      }
    }
  }
};
