var data1 =dataSet.map(function(d) {return d[0];});
var data2 =dataSet.map(function(d) {return d[1];});
var data3 =dataSet.map(function(d) {return d[2];});
var data4 =dataSet.map(function(d) {return d[3];});

option = {
    tooltip:{
        triggrt:'item',
        formatter:'{b}:{c}({d}%)'
    },
    series:[
        {
            type:'pie',
            radius:['15%','25%'],
            itemStyle:{
                borderRadius:20,
                // borderColor:'#fff',
                borderWidth:4
            },
            data:[
                {value:data4,name:'融资未到期', itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#32437d'},
                                            {offset:1,color:'#32437c'}
                                        ]
                                    }
                                }
                        }},
                {value:data3,name:'到期融资', itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#93d2ff'},
                                            {offset:1,color:'#2c89f6'}
                                        ]
                                    }
                                }
                        }},
            ],
            // labelLine: {
            //     lineStyle: {
            //         color: '#000000'
            //     },
            //     smooth: 0,
            //     length:0,
            //     length2: 0
            // },
            label:{
                show:false
            }
        },
        {
            type:'pie',
            radius:['45%','60%'],
            itemStyle:{
                borderRadius:20,
                // borderColor:'#fff',
                borderWidth:4
            },
            data:[
                {value:data2,name:'未到期理财', itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#32437d'},
                                            {offset:1,color:'#32437c'}
                                        ]
                                    }
                                }
                        }},
                {value:data1,name:'到期理财', itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#ffc7c7'},
                                            {offset:1,color:'#fa3c78'}
                                        ]
                                    }
                                }
                        }},
            ],
            // labelLine: {
            //     lineStyle: {
            //         color: '#000000'
            //     },
            //     smooth: 0,
            //     length:0,
            //     length2: 0
            // },
            label:{
                show:false
            }
        }
    ]
}
  