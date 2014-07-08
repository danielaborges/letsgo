describe("Activity Testing", function() {
    var activity = new Activity(1, "type", "description");
    it("Contructor testing", function() {
        expect(activity.getId()).toBe(1);
        expect(activity.getType()).toBe("type");
        expect(activity.getDescription()).toBe("description");
    });
});