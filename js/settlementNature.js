"use strict";
const SettlementNature={
    seed:1947,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        this.drawTrees(ctx,left+45,top+65,right-45,bottom-55,random);
        this.drawBushes(ctx,left+30,top+40,right-30,bottom-30,random);
        this.drawGrass(ctx,left+25,top+30,right-25,bottom-25,random);
        this.drawRocks(ctx,left+25,top+30,right-25,bottom-30,random);
    },
    drawTrees(ctx,left,top,right,bottom,random){
        for(let i=0;i<18;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(Math.abs(x-(left+right)/2)<180&&Math.abs(y-(top+bottom)/2)<120)continue;
            this.drawTree(ctx,x,y,random);
        }
    },
    drawTree(ctx,x,y,random){
        const scale=.8+random()*.45;
        ctx.fillStyle="#171a18";
        ctx.fillRect(x-7*scale,y-4*scale,14*scale,48*scale);
        ctx.fillStyle="#3b3026";
        ctx.fillRect(x-5*scale,y-2*scale,10*scale,45*scale);
        ctx.fillStyle="#252b27";
        ctx.fillRect(x-30*scale,y-48*scale,60*scale,42*scale);
        ctx.fillRect(x-23*scale,y-65*scale,46*scale,24*scale);
        ctx.fillRect(x-12*scale,y-77*scale,24*scale,20*scale);
        ctx.fillStyle="#39453a";
        ctx.fillRect(x-25*scale,y-44*scale,50*scale,31*scale);
        ctx.fillRect(x-19*scale,y-60*scale,38*scale,25*scale);
        ctx.fillRect(x-9*scale,y-70*scale,18*scale,17*scale);
        ctx.fillStyle="#4a5747";
        ctx.fillRect(x-16*scale,y-51*scale,11*scale,8*scale);
        ctx.fillRect(x+7*scale,y-61*scale,10*scale,7*scale);
        ctx.fillRect(x-4*scale,y-68*scale,8*scale,6*scale);
        ctx.fillStyle="#1c211e";
        ctx.fillRect(x-35*scale,y-13*scale,9*scale,7*scale);
        ctx.fillRect(x+26*scale,y-22*scale,9*scale,7*scale);
    },
    drawBushes(ctx,left,top,right,bottom,random){
        for(let i=0;i<34;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(Math.abs(x-(left+right)/2)<150&&Math.abs(y-(top+bottom)/2)<100)continue;
            this.drawBush(ctx,x,y,random);
        }
    },
    drawBush(ctx,x,y,random){
        const size=8+random()*10;
        ctx.fillStyle="#202721";
        ctx.fillRect(x-size,y-size*.35,size*2,size);
        ctx.fillRect(x-size*.55,y-size,size*1.1,size);
        ctx.fillStyle="#354034";
        ctx.fillRect(x-size*.75,y-size*.3,size*.9,size*.55);
        ctx.fillRect(x-size*.15,y-size*.75,size*.9,size*.65);
        ctx.fillStyle="#465143";
        ctx.fillRect(x-size*.4,y-size*.55,size*.35,size*.25);
    },
    drawGrass(ctx,left,top,right,bottom,random){
        for(let i=0;i<130;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(Math.abs(x-(left+right)/2)<130&&Math.abs(y-(top+bottom)/2)<90)continue;
            const size=3+random()*5;
            ctx.fillStyle=random()>.5?"#3d493b":"#303a31";
            ctx.fillRect(x,y-size,size*.55,size);
            ctx.fillRect(x+size*.45,y-size*.7,size*.55,size*.7);
        }
    },
    drawRocks(ctx,left,top,right,bottom,random){
        for(let i=0;i<28;i++){
            const x=left+random()*(right-left);
            const y=top+random()*(bottom-top);
            if(Math.abs(x-(left+right)/2)<140&&Math.abs(y-(top+bottom)/2)<100)continue;
            this.drawRock(ctx,x,y,random);
        }
    },
    drawRock(ctx,x,y,random){
        const size=4+random()*8;
        ctx.fillStyle="#202522";
        ctx.fillRect(x-size,y-size*.45,size*2,size);
        ctx.fillStyle="#3a403c";
        ctx.fillRect(x-size*.65,y-size*.65,size*1.2,size*.55);
        ctx.fillStyle="#4a504b";
        ctx.fillRect(x-size*.35,y-size*.55,size*.55,size*.2);
    }
};
window.KAVRYXSettlementNature=SettlementNature;