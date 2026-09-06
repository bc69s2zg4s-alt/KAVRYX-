"use strict";
const SettlementGround={
    seed:731,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const groundWidth=size;
        const groundHeight=size*.7;
        ctx.fillStyle="#171b19";
        ctx.fillRect(left,top,groundWidth,groundHeight);
        this.drawTerrain(ctx,left,top,groundWidth,groundHeight);
        this.drawPaths(ctx,centerX,centerY);
        this.drawEdges(ctx,left,top,groundWidth,groundHeight);
    },
    drawTerrain(ctx,left,top,width,height){
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        for(let i=0;i<260;i++){
            const x=left+random()*width;
            const y=top+random()*height;
            const type=Math.floor(random()*5);
            const size=4+random()*14;
            if(type===0){
                ctx.fillStyle="#202522";
                ctx.fillRect(x,y,size,size*.55);
                ctx.fillStyle="#303631";
                ctx.fillRect(x+2,y,size*.55,2);
            }
            if(type===1){
                ctx.fillStyle="#242a25";
                ctx.fillRect(x,y,size*.7,size*.35);
                ctx.fillRect(x+size*.5,y+size*.2,size*.5,2);
            }
            if(type===2){
                ctx.fillStyle="#2d352d";
                ctx.fillRect(x,y,size*.35,size);
                ctx.fillRect(x+size*.25,y-size*.35,2,size*.7);
            }
            if(type===3){
                ctx.fillStyle="#292b27";
                ctx.fillRect(x,y,size,size*.7);
                ctx.fillStyle="#36382f";
                ctx.fillRect(x+2,y+2,size*.45,2);
            }
            if(type===4){
                ctx.strokeStyle="#111514";
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(x,y);
                ctx.lineTo(x+size*.55,y+size*.2);
                ctx.lineTo(x+size*.25,y+size*.55);
                ctx.stroke();
            }
        }
    },
    drawPaths(ctx,x,y){
        ctx.fillStyle="#222622";
        ctx.fillRect(x-410,y+18,820,42);
        ctx.fillRect(x-22,y-250,44,410);
        ctx.fillStyle="#343832";
        for(let i=-390;i<390;i+=38){
            ctx.fillRect(x+i,y+27,25,10);
        }
        for(let i=-230;i<160;i+=38){
            ctx.fillRect(x-14,y+i,9,26);
        }
        ctx.fillStyle="#171a18";
        ctx.fillRect(x-410,y+18,820,4);
        ctx.fillRect(x-22,y+18,4,142);
        ctx.fillRect(x+18,y-250,4,410);
    },
    drawEdges(ctx,left,top,width,height){
        ctx.fillStyle="#252b27";
        ctx.fillRect(left,top+height-34,width,34);
        ctx.fillStyle="#101312";
        ctx.fillRect(left,top+height-5,width,5);
        ctx.fillStyle="#343a35";
        for(let x=left+10;x<left+width;x+=52){
            ctx.fillRect(x,top+height-24,28,6);
        }
    }
};
window.KAVRYXSettlementGround=SettlementGround;