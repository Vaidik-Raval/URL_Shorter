const URL=require('../models/url');
const shortid=require('shortid');


async function handleGeneratNSU(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"bad error emty og"});
    const shortID=shortid.generate();
    const data = await URL.create({
        shortId: shortID,
        ogUrl:body.url,
    })

    return res.render('index',{
        id:shortID,
    });
        // return res.json(data);
}

async function handleAna(req,res) {
    const body=req.body;
    console.log(body);
    if(!body.aurl) return res.status(400).json({error:"bad error emty 1 og"});
    const short=body.aurl;
    const data=await URL.findOne({shortId:short});
    if (!data) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    console.log(data);

    return res.render('analyze',{
        urls:data,
    })
    // return res.json({
    //     visited: data.visited.length,
    //     data:data.visited})
}

module.exports={
    handleGeneratNSU,
    handleAna,
}