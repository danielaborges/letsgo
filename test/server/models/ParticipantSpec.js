describe("Participant Testing", function() {
    var participant = new Participant(1, "name", "email");
    it("Contructor testing", function() {
        expect(participant.getId()).toBe(1);
        expect(participant.getName()).toBe("name");
        expect(participant.getEmail()).toBe("email");
    });
});