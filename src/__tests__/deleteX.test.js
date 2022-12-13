const deleteX =require('../deleteX');

describe("deleteX test suite", ()=>{ 
        it("should return the same tableau", ()=>{
            const tab=["Momo",'Hadji','Leo'];

            const result=deleteX(tab);
            expect(result).toEqual(tab);
    });
        it("should return the tab witout the word with x", ()=> {
            const tab =["DMX," ,"Xzibit", "JeanKevin"];
            const result=deleteX(tab);
            expect(result).toEqual(["JeanKevin"]);
        });
});