function DistrictCountryHandler() {

    const EXHAUSTED_CLASS = "exhausted";

    this.init = () => {
        $("#map-toggle").on('change', (e) => {
            $("#map-countries").toggle(1000);
            $("#map-districts").toggle(1000);
        });
        $("#reset").on("click", () => {
            $("svg path").removeClass(EXHAUSTED_CLASS);
        });
    }

    this.initCountries = (svg) => {
        console.log("Initialize countries");
        let countries = $(svg).find("path.country");
        bindEvents(countries);
    }

    this.initDistricts = (svg) => {
        console.log("Initialize districts");
        let districts = $(svg).find("path.district");
        bindEvents(districts);
    }

    function bindEvents(eventTargets) {
        for(element of eventTargets) {
            $(element).on("click", (e) => {
                let target = $(e.target);
                if(target.hasClass(EXHAUSTED_CLASS)) {
                    target.removeClass(EXHAUSTED_CLASS);
                } else {
                    target.addClass(EXHAUSTED_CLASS);
                }
            });
        }
    }

};
const districtCountryHandler = new DistrictCountryHandler();