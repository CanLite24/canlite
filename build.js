import { ChemicalBuild } from "chemicaljs";

const build = new ChemicalBuild({
    scramjet: false,
    rammerhead: false,
    path: "uvDist",
});

await build.write();
