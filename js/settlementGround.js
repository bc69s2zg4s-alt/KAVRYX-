"use strict";
const SettlementGround={
    seed:731,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const groundWidth=size;
        const groundHeight=size*.7;
        ctx.fillStyle="#181d1c";
        ctx.fillRect(left,top,groundWidth,groundHeight);
        this.drawBlocks(ctx,left,top,groundWidth,groundHeight);
        this.drawTexture(ctx,left,top,groundWidth,groundHeight);
        this.drawPaths(ctx,centerX,centerY);
        this.drawEdges(ctx,left,top,groundWidth,groundHeight);
    },
    drawBlocks(ctx,left,top,width,height){
        const block=32;
        ctx.strokeStyle="rgba(0,0,0,.18)";
        ctx.lineWidth=2;
        for(let x=left;x<left+width;x+=block){
            for(let y=top;y<top+height;y+=block){
                ctx.strokeRect(x,y,block,block);
            }
        }
    },
    drawTexture(ctx,left,top,width,height){
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        const count=Math.floor(width*height/8500);
        for(let i=0;i<count;i++){
            const x=left+random()*width;
            const y=top+random()*height;
            const type=Math.floor(random()*4);
            if(type===0)this.drawStone(ctx,x,y,random);
            if(type===1)this.drawCrack(ctx,x,y,random);
            if(type===2)this.drawGrass(ctx,x,y,random);
            if(type===3)this.drawDirt(ctx,x,y,random);
        }
    },
    drawStone(ctx,x,y,random){
        const size=3+Math.floor(random()*5);
        ctx.fillStyle="#343936";
        ctx.fillRect(x,y,size,size);
        ctx.fillStyle="#454b46";
        ctx.fillRect(x,y,size,2);
        ctx.fillStyle="#202523";
        ctx.fillRect(x+size-2,y+2,2,size-2);
    },
    drawCrack(ctx,x,y,random){
        ctx.strokeStyle="#0f1312";
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+4+random()*7,y+2+random()*3);
        ctx.lineTo(x+7+random()*6,y+7+random()*5);
        ctx.stroke();
    },
    drawGrass(ctx,x,y,random){
        ctx.fillStyle="#394338";
        ctx.fillRect(x,y+4,3,7);
        ctx.fillRect(x+4,y+1,3,10);
        if(random()>.5)ctx.fillRect(x+8,y+5,3,6);
    },
    drawDirt(ctx,x,y,random){
        const size=4+Math.floor(random()*7);
        ctx.fillStyle="#292b26";
        ctx.fillRect(x,y,size,size);
        ctx.fillStyle="#34352d";
        ctx.fillRect(x+2,y+1,Math.max(2,size-3),2);
    },
    drawPaths(ctx,x,y){
        ctx.fillStyle="#252724";
        ctx.fillRect(x-410,y+20,820,38);
        ctx.fillRect(x-19,y-250,38,410);
        ctx.fillStyle="#30332e";
        for(let i=-390;i<390;i+=48){
            ctx.fillRect(x+i,y+29,31,5);
        }
        for(let i=-230;i<160;i+=48){
            ctx.fillRect(x-14,y+i,6,30);
        }
        ctx.fillStyle="#191c1a";
        ctx.fillRect(x-410,y+20,820,3);
        ctx.fillRect(x-19,y-250,3,410);
        ctx.fillRect(x+16,y-250,3,410);
    },
    drawEdges(ctx,left,top,width,height){
        ctx.fillStyle="#242a27";
        ctx.fillRect(left,top+height-28,width,28);
        ctx.fillStyle="#111514";
        ctx.fillRect(left,top+height-4,width,4);
        ctx.fillStyle="#303632";
        for(let x=left+12;x<left+width;x+=58){
            ctx.fillRect(x,top+height-20,28,5);
        }
    }
};
window.KAVRYXSettlementGround=SettlementGround;