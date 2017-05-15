/**
 * @author: Isaiah Mann
 * @desc: Contains global variables which are used on both the player and host logic for integrating Unity with Volunteer Science
 */

// Constant values used for communication between Volunteer Science and Unity
var FETCH_KEY = "vs_fetch";
var SUBMIT_KEY = "vs_submit";
var COMPLETE_KEY = "vs_complete";
var SET_KEY = "vs_set";
var ROUND_KEY = "vs_round";
var PLAYER_ID_KEY = "vs_player_id";
var SEED_KEY = "vs_seed";
var INIT_KEY = "vs_init";

// Multipart messages passed to the Volunteer Science host are separated by this char:
// e.g. "part1:part2:part3"
var JOIN_CHAR = ":";

// Determines event type based on if the event data contains the string corresponding to one of the constant keys:

// Fetch event is for returning data from Volunteer Science
function isFetchEvent(eventData)
{
     return eventData.includes(FETCH_KEY);
}

// Submit event is for sending data to Volunteer Science
function isSubmitEvent(eventData)
{
     return eventData.includes(SUBMIT_KEY);
}

// Complete event informs Volunteer Science the experiment has been completed
function isCompleteEvent(eventData)
{
	return eventData == COMPLETE_KEY;
}

// Set event sets a variable in Volunteer Science, (only usable for certain parameters, e.g. experiment round)
function isSetEvent(eventData)
{
	return eventData.includes(SET_KEY);
}

// Round events set or fetch the current round of the Experiment
function isRoundEvent(eventData)
{
	return eventData.includes(ROUND_KEY);
}

// Events related to retrieving information about the player ID
function isPlayerIDEvent(eventData)
{
     return eventData.includes(PLAYER_ID_KEY);
}

// Events related to fetching the random seed generated by Volunteer Science for this experiment instance
function isSeedEvent(eventData)
{
     return eventData.includes(SEED_KEY);
}

// An init event is used when Volunteer Science calls initialize() on the experiment
function isInitEvent(eventData)
{
     return eventData.includes(INIT_KEY);
}