module.exports = {
	HAND_SIZE: 8,
	MIN_PLAYERS: 3,
 	MAX_PLAYERS: 20,
 	ROUND_POINTS: 5,
 	MESSAGE_RATE: 7,
 	DEALER_TERM: "judge",

	TIMEOUTS: {
    	nomination: 25,
    	election: 40,
    	intermission: 20,
    	abandoned: 30, // clientless
    	afk: 10*60, // no actions
	}
};