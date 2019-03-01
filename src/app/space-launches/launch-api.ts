export interface ILunchesAPIData {
  flight_number: number;
  launch_year: string;
  rocket: {
    rocket_name: string,
  };
  details: string;
  links: {
    presskit: string
  }
}
