describe("Participant Testing", function() {
    var participant = new Participant(1, "name", "email");
    
    it("Contructor testing", function() {
        expect(participant.getId()).toBe(1);
        expect(participant.getName()).toBe("name");
        expect(participant.getEmail()).toBe("email");
        expect(participant.getResourceList().length).toBe(0);
    });
    
    it("Adding a Resource", function() {
        var resource = new Resource(1, "name", 1);
        
        participant.addResource(resource);        
        expect(participant.getResourceList().length).toBe(1);
        expect(participant.getResourceList()[0].getId()).toBe(1);
        expect(participant.getResourceList()[0].getName()).toBe("name");
        expect(participant.getResourceList()[0].getQuantity()).toBe(1);
    });
});