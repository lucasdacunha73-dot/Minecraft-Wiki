/* cards index */
function link(local){
    switch (local){
        case 'index':
            local = "index.html";
        break;

        case 'mods':
            local = "mods.html";
        break;

        case 'biomas':
            local = "biomas.html";
        break;

        case 'mobs':
            local = "mobs.html";
        break;

        case 'curiosidades':
            local = "curiosidades.html";
        break;

        case 'sobre':
            local = "sobre.html";
        break;
    };
    
    window.location.href = local;
};

/* menu */
//mostrar e esconder menu 
function menu(acao){
    const estadomenu = document.getElementById("menu");
    if(acao === 'mostrar'){
        estadomenu.style.display = "flex";
    } else {
        estadomenu.style.display = "none";
    };
};

/* menu */
let caminho = 'mods';

function categoria(escolha){
    const img = document.getElementById("img-categoria");
    const nome = document.getElementById("nome-categoria");
    const descricao = document.getElementById("descricao-categoria");

    switch(escolha){
        case 'mods':
            img.src = "imgs/index/bloco-de-grama.png";
            nome.innerText = "Mods";
            descricao.innerText = "Explore os melhores mods do Minecraft e adicione novas mecânicas ao jogo!";
            caminho = 'mods';
        break;
        
        case 'biomas':
            img.src = "imgs/index/muda de carvalho.png";
            nome.innerText = "Biomas";
            descricao.innerText = "Conheça os principais biomas do jogo e suas carácteristicas únicas!";
            caminho = 'biomas';
        break;

        case 'mobs':
            img.src = "imgs/index/Crafting-table.png";
            nome.innerText = "Mobs";
            descricao.innerText = "Conheça alguns fatos sobre os mobs do Minecraft!";
            caminho = 'mobs';
        break;

        case 'curiosidades':
            img.src = "imgs/index/livro-minecraft.png";
            nome.innerText = "Curiosidades";
            descricao.innerText = "Aprenda algumas curiosidades sobre o jogo e teste seus conhecimentos!";
            caminho = 'curiosidades';
        break;
    };
};

function pagina(){
    let destino = '#';

    switch(caminho){
        case 'mods':
            destino = "mods.html";
        break;
            
        case 'biomas':
            destino = "biomas.html";
        break;

        case 'mobs':
            destino = "mobs.html";
        break;

        case 'curiosidades':
            destino = "curiosidades.html";
        break;
    };

    window.location.href = destino;
}

/* card mods */
function mod(selecionado){
    switch (selecionado){
        case 1:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/create";
        break;

        case 2:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/osce";
        break;

        case 3:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/projecte";
        break;

        case 4:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/mekanism";
        break;

        case 5:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/journeymap#";
        break;
        case 6:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/jei";
        break;

        case 7:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/appleskin";
        break;

        case 8:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/waystones";
        break;

        case 9:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks";
        break;

        case 10:
            selecionado = "https://www.curseforge.com/minecraft/mc-mods/mahou-tsukai";
        break;
    };

    window.open(selecionado, '_blank');
};

/* card bioma */
function bioma(escolhido){
    switch (escolhido){
        case 1:
            escolhido = "https://pt.minecraft.wiki/w/Floresta";
        break;

        case 2:
            escolhido = "https://pt.minecraft.wiki/w/Plan%C3%ADcie";
        break;

        case 3:
            escolhido = "https://pt.minecraft.wiki/w/Deserto";
        break;

        case 4:
            escolhido = "https://pt.minecraft.wiki/w/Plan%C3%ADcie_nevada";
        break;

        case 5:
            escolhido = "https://pt.minecraft.wiki/w/Taiga";
        break;
        case 6:
            escolhido = "https://pt.minecraft.wiki/w/P%C3%A2ntano";
        break;

        case 7:
            escolhido = "https://pt.minecraft.wiki/w/Savana";
        break;

        case 8:
            escolhido = "https://pt.minecraft.wiki/w/Selva";
        break;

        case 9:
            escolhido = "https://pt.minecraft.wiki/w/Montanhas";
        break;

        case 10:
            escolhido = "https://pt.minecraft.wiki/w/Oceano";
        break;

        case 11:
            escolhido = "https://pt.minecraft.wiki/w/Cerejeira";
        break;

        case 12:
            escolhido = "https://pt.minecraft.wiki/w/Campo_de_cogumelos";
        break;
    };

    window.open(escolhido, '_blank');
};

/* menu hamburguer */
//mostrar e esconder menu 
function menuhamburguer(acao){
    const estadomenu = document.getElementById("menu-mobile");
    if(acao === 'mostrar'){
        estadomenu.style.display = "flex";
    } else if (acao === 'esconder'){
        estadomenu.style.display = "none";
    };
};