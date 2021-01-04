export default async function getMoveData(moveName){
    const moveURL = `https://pokeapi.co/api/v2/move/${moveName}`;

    return await fetch(moveURL)
    .then(res => res.json())
    .then(response =>{
        const {type} = response;
        const {damage_class} = response;
        const {pp} = response;
        const {power} = response;

        const typeMove = ()=>{
            const moveType = type.name;
            return moveType;
        }

        const damageClass = ()=>{
            const damage = damage_class.name;
            return damage;
        };

        const damageClassName = damageClass();
        const typeName = typeMove();

        return {typeName, damageClassName, pp, power};
    });
};
