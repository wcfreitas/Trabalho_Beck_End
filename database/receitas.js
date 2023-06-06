const prisma = require('./prisma');

const createReceita = (receitas, idUser) => {
    return prisma.receitas.create({
        data: {
            name: receitas.name,
            idUser,
            description: receitas.description,
            tempPreparo: receitas.tempPreparo,
        }
    });
}
const updateReceita = async (id, receitas, idUser) => {
    const receita = await prisma.receitas.findFirst({
        where: {
            id,
        }
    })
    if (receita.idUser != idUser) {
        throw new Error("Você não está autorizado a atualizar isso")
    }
    return prisma.receitas.update({
        where: {
            id
        },
        data: {
            name: receitas.name,
            description: receitas.description,
            tempPreparo: receitas.tempPreparo,
        }
    });
}
const deleteReceita = async (id, idUser, receitas) => {
    const receita = await prisma.receitas.findFirst({
        where: {
            id,
        }
    })
    if (receita.idUser != idUser) {
        throw new Error("Você não está autorizado a atualizar isso")
    }
    return prisma.receitas.delete({
        where: {
            id
        },
        data: receitas,
    });
};
const viewById = (idUser) => {
    return prisma.receitas.findMany({
        where: {
            idUser
        }
    });
};

module.exports = {
    createReceita,
    updateReceita,
    deleteReceita,
    viewById,
};