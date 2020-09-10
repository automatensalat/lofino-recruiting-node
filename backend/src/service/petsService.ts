import { Pet } from "../domain/Pet";

/**
 * finds the "trending" pet from a list of pets.
 * A pet is considered trending if it has the most ratings compared to other pets in a time frame of 7 days relative to a given date.
 *
 * @param pets the list of pets
 * @param date the end date of the interval for which to consider the 'trending' state. the start date should be 7 days prior to that date.
 *
 * @returns the pet with the most ratings within the [date - 7 days, date] interval or `undefined` if there is unsufficient data within the interval
 */
export function getTrendingPet(pets: Pet[], date: Date): Pet | undefined {
	// TODO: implement

	return undefined;
}
