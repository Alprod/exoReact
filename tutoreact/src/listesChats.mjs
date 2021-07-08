const amisChat = {
    date: new Date(),
    titre: "Boule de neige",
    auteur: {
        prenom: "Tran Mau Tri Tam",
        pictureUrl: "/images/chats/chatblanc.jpg"
    },
    texte: "Belle comme le printemps"
};

const amisChatA = {
    date: new Date(),
    titre: "Le pays des rêves",
    auteur: {
        prenom: "Erik-Jan Leusink",
        pictureUrl: "/images/chats/chatsgris.jpg"
    },
    texte: "Un véritable paresseux, un poil sous la patte."
};
const amisChatB = {
    date: new Date(),
    titre: "Un ange",
    auteur: {
        prenom: "Kate Stone Matheson",
        pictureUrl: "/images/chats/chatcacher.jpg"
    },
    texte: "Tel un ange sortis des cieux."
};

export const amisChats = [];
amisChats.push(amisChat)
amisChats.push(amisChatA)
amisChats.push(amisChatB)