module.exports = (function () {
    function normalizeWeightUnit(unit, fallback) {
        if (unit == 'g' || unit == 'kg') {
            return unit;
        }
        return fallback || 'g';
    }

    function WeightToMg(value, unit) {
        unit = normalizeWeightUnit(unit, 'g');
        if (unit == 'g') {
            return value * 1000;
        } if (unit == 'kg') {
            return value * 1000000;
        }
    }

    function MgToWeight(value, unit, display) {
        if (typeof display === 'undefined') display = false;
        unit = normalizeWeightUnit(unit, 'g');
        if (unit == 'g') {
            return Math.round(100 * value / 1000.0) / 100;
        } if (unit == 'kg') {
            return Math.round(100 * value / 1000000.0, 2) / 100;
        }
    }

    return {
        WeightToMg,
        MgToWeight,
        normalizeWeightUnit,
    };
}());
