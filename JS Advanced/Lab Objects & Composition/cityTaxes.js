function cityTaxes(name, population, treasury) {

    let output = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            return this.population = this.population + (this.population * percentage / 100);
        },

        applyRecession(percentage) {
            return this.treasury = this.treasury - (this.treasury * percentage / 100);
        }
    }

    return output


}
cityTaxes('Tortuga',
    7000,
    15000);