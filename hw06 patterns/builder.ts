
/** 
 * 
*/

type TripQualityClass = 'economy' | 'premium' | 'luxury';

interface TripOptionsInterface {      //interface with diff attributes 
    from: Date;
    to: Date;
    locationFrom: string;
    locationTo: string;
    tripQuality: TripQualityClass;
}

class Trip {
    tripOptions: TripOptionsInterface;

    constructor(options: TripOptionsInterface) {

        this.tripOptions = options;
    }

    changeFromDate(newDate: TripOptionsInterface['from']) { // this чтобы каждое из свойств могло работать с контекстом
        this.tripOptions.from = newDate;                    // и мы могли вызывать методы по цепочке
        return this;

    }

    changelocationTo(newLocation: TripOptionsInterface['locationTo']) {
        this.tripOptions.locationTo = newLocation;
        return this;

    }

    changetripQuality(newTripquality: TripOptionsInterface['tripQuality']) {
        this.tripOptions.tripQuality = newTripquality;

        return this;

    }

}
const clientTrip = new Trip({
    from: new Date(),
    to: new Date('07/07/2023'),
    locationFrom: 'Moscow',
    locationTo: 'Sochi',
    tripQuality: 'luxury'
})

clientTrip.changetripQuality('economy').              // каждый из методов идет сразу за следующим
    changeFromDate(new Date('07/24/2023')).
    changelocationTo('Dubai').
    changetripQuality('premium')

console.log({ clientTrip })