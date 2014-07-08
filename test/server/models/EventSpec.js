describe("Event Testing", function() {
    var event = new Event(1, "name");
    it("Contructor testing", function() {
        expect(event.getId()).toBe(1);
        expect(event.getName()).toBe("name");
    });
});