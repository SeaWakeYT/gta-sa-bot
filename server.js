const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', msg => {
    if (msg.content === 'who is the Big Smoke?') {
        msg.channel.send('Everyone will remember my name... BIG SMOKE! The traitor of the Grove Street Families who eats wayyyy to much. He orders entire resturant menus in his free time, preferably going to Cluckin Bell, ordering two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda... Do NOT trust this lard. You will have to kill him for being a fatass soon enough');
    }
	if (msg.content === 'who is Carl Johnson?') {
		msg.channel.send('OPEN YOUR EYES, CJ... MAN CJ, YOU DRIVE LIKE A BITCH... yup, Carl "CJ" Johnson is the main character of this game, and he fears the "Rolling Height Ballas". Afterwards, tell that lady to get out of her car, or tell the cops to make their lives long cuz depsite being the main character, dis dude');
	}
	if (msg.content === 'who is Cesar Vialpando?') {
		msg.channel.send('The lowrider dude who is doesnt have a pass, so that explains it holmes');
	}
	if (msg.content === 'who is Berkley?') {
		msg.channel.send('Ohhhhhh.... Berkley! Who the fuck is Berkley? (Carl Johnson, Air Raid)');
	}
	if (msg.content === 'who is Frank Tenpenny?') {
		msg.channel.send('Im going to get drunk and get laid. You have a PROBLEM with that? (No Frank, relax) hentai too! HA HA AHAHAHAHAHAH! (himself, High Noon). This is the main antagonist, who Samuel Jackson plays. After making CJ do his dirty work for him (threatening to frame him for the murder of a cop the latter did himself) he wastes him over by making his closest homies Big Smoke and Ryder work with him. After CJ is forced to kill Big Smoke, Tenpenny makes an appearance, saying that he needs one more favor, before being spooked by CJ calling Sweet in. He then dies on the street after the firetruck he stole to get to the airport crashing');
	}
	if (msg.content === 'who is Woozie?') {
		msg.channel.send('(full name Wu Zi Mu) the blind asian dude who Carl made sure to him that he is black, not chinese. "Uh, one last thing. You do know that Im black, right? And not Chinese?" "Im blind, Carl, not stupid."');
	}
	if (msg.content === 'who is Mike Toreno?') {
		msg.channel.send('"You know, after what you have done for me, it is like you are a pro now. I have got double agents in Panama who wanna put a price on your head. A Russian spy, some little, fat, Boris-looking guys is asking for clearence to interrogate you - Russian style. Calipers on the genitals. Feels good. You would like it."(himself, Verdant Meadows)');
	}
	if (msg.content === 'who is OG Loc?') {
		msg.channel.send('(aka Jeffrey Cross) there is something REAL edgy about him, and when someone mispronounces his name, he angrily corrects him and subsequently admits to being a gang banger at the age of 3');
	}
	if (msg.content === 'who is Freddy?') {
		msg.channel.send('he acts gay upon OG Loc in the mission named after himself, and you kill him (not for that lol) for stealing OG Locs music');
	}
	if (msg.content === 'who is Madd Dogg?') {
		msg.channel.send('After CJ kills BOTH of his managers and stealing the rhyme book, and is therefore responsible for Madd Dogg jumping from a ledge from a hotel casino, Madd Dogg ironically hires CJ to be his manager, and orders a hit on OG Loc, which CJ (also ironically) gave the rhyme book to. "Man! That fake-ass Loc! I knew there was something familiar about those rhymes he was kickin. They are from my rhyme book! That is my money! And those are my hoes! AND THAT MY VIDEO HE SHOOTIN TODAY!" (himself, Cut Throat Business)');
	}
	if (msg.content === 'who is Ryder?') {
		msg.channel.send('Another idiot who betrayed the GSF, but because he isnt at bad or funny as the Big Smoke, I leave you with this: "Who has more straps than anybody? Who has all the straps, huh?! The Army! Lets go!" (himself, Robbing Uncle Sam)');
	}
	if (msg.content === 'who is Carla Johnson?') {
		msg.channel.send('the scene opens up to CJ sitting on the front steps, unable to believe his moms got killed. then, he looks up to see a girl approaching him, but then she cries and hugs him. as carl tries wondering if she is drunk or not, she blurts out "BROTHER, OOOOHH BROTHER, I AM SO GLAD YER ALIVE!" as this is not carls sister kendl, cj says, "wth are you?", to which she replies, "Its me CJ, ITS CARLA!" cj wonders why didnt anyone tell him about a sister he had... cj looks at this girl one more time, stands up, then goes over to sweet, asking to borrow his car, then he wastes himself for good XD');
	}
	if (msg.content === 'who is Billy Dexter?') {
		msg.channel.send('West Coast Talk Radio host of Entertaining America, who gets headshotted by the man he is interviewing, Jack Howitzer. (who is Jack Howitzer?) (what is the transcipt of EA1?)');
	}
	if (msg.content === 'who is Billy Dexter?') {
		msg.channel.send('West Coast Talk Radio host of Entertaining America, who gets headshotted by the man he is interviewing, Jack Howitzer. (who is Jack Howitzer?) (what is the transcipt of EA1?)');
	}
	if (msg.content === 'What is your order?') {
		msg.channel.send('Two number 9s (for CJ and Ryder), a number 9 large (for myself), a number 6 with extra dip (for Sweet), a number 7, two number 45s, one with cheese, and a large soda (all for myself).');
	}
});

client.login(token);