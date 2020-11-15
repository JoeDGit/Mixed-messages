const components = {
  potions: ['red', 'blue', 'yellow', 'green', 'white'],
  effects: [`Your head begins to grow to 3 times it's normal size!`, `Your thumbs become bound to your hands and are unusable`,
   `Your vision fades to black randomly for 5 seconds every 30 seconds`, `Your feet become rooted to the ground, immobilising you`,
    `You're growing sleepy, your eyes grow heavy and you stumble to the ground` ],
  time: ['1 minute', '5 minutes', '10 minutes', '30 minutes', '1 hour'],

  randomPot: function() {
    let randomPotion = this.potions[Math.floor(Math.random() * 5)]
    return randomPotion
  },
  randomEffect: function () {
    let randomEffect = this.effects[Math.floor(Math.random() * 5)]
    return randomEffect
  },
  randomTime: function () {
    let randomTime = this.time[Math.floor(Math.random() * 5)]
    return randomTime
  }
}

const message = (potion, effect, time) => {
  console.log(`You uncork the ${potion} potion and guzzle it down, you feel strange and then  ... ${effect}. From previous experience you expect this will last around ${time},
   but you cant be sure`)

}

message(components.randomPot(), components.randomEffect(), components.randomTime())