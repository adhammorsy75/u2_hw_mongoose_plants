const db = require('../db')
const Plant = require('../models/plant')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const plants = [ {
        name: 'Aloe Vera',
        description: 'Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.',
      },
      {
        name: 'Snake Plant',
        description: 'Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint Georges sword, mother-in-laws tongue, and vipers bowstring hemp, among other names.',
      },
      {
        name: 'Areca palm',
        description: 'Dypsis lutescens, also known as golden cane palm, areca palm, yellow palm, or butterfly palm, is a species of flowering plant in the family Arecaceae, native to Madagascar and naturalized in the Andaman...',
      },
      {
        name: 'Spider Plant',
        description: 'Chlorophytum comosum, often called spider plant but also known as airplane plant, St. Bernards lily, spider ivy, ribbon plant, and hen and chickens is a species of perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.',
      },
      {
        name: 'Dracaena',
        description: 'Dracaena is a genus of about 120 species of trees and succulent shrubs. In the APG IV classification system, it is placed in the family Asparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae). It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).',
      },
      {
        name: 'Weeping Fig',
        description: 'Ficus benjamina, commonly known as weeping fig, benjamin fig or ficus tree, and often sold in stores as just ficus, is a species of flowering plant in the family Moraceae, native to Asia and Australia. It is the official tree of Bangkok.',}
    ]

    await Plant.insertMany(plants)
    console.log("Created some plants!")
}
const run = async () => {
    await main()
    db.close()
}

run()