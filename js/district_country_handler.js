function DistrictCountryHandler() {

    this.init = () => {
        $("#map-toggle").on('change', (e) => {
            $("#map-countries").toggle(1000);
            $("#map-districts").toggle(1000);
        });
        $("#reset").on("click", () => {
            $("svg path").removeClass("exhausted");
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
                if(target.hasClass("exhausted")) {
                    target.removeClass("exhausted");
                } else {
                    target.addClass("exhausted");
                }
            });
        }
    }

};
const districtCountryHandler = new DistrictCountryHandler();