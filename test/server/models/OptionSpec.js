describe("Option Testing", function() {
    var option = new Option(1, "place", "hour");
    it("Contructor testing", function() {
        expect(option.getId()).toBe(1);
        expect(option.getPlace()).toBe("place");
        expect(option.getHour()).toBe("hour");
    });
});