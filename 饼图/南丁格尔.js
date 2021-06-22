var data1 =dataSet.map(function(d) {return d[0];});
var data2 =dataSet.map(function(d) {return d[1];});
var data3 =dataSet.map(function(d) {return d[2];});

option = {
    tooltip:{
        triggrt:'item',
        formatter: function(p){
            let value = p.value;
            if(value >999){
                let parts = value.toString().split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');
                value = parts.join('.');
            }
            let res = p.seriesName = '<br/>' + p.name + ':'+value+'('+p.percent+'%)';
            return res
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
                {value: data3, name: '票据',
                    itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#FED1B4'},
                                            {offset:1,color:'#FD99BD'}
                                        ]
                                    }
                                }
                        }
                },
                {value: data2, name: '理财',
                    itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#57BAF5'},
                                            {offset:1,color:'#12FFF7'}
                                        ]
                                    }
                                }
                        }
                },
                {value: data1, name: '存款',
                    itemStyle:
                        {
                            normal:
                                {
                                    color:{
                                        type:"linear",
                                        colorStops:[
                                            {offset:0,color:'#4499FF'},
                                            {offset:1,color:'#99c9FF'}
                                        ]
                                    }
                                }
                        }
                }
            ],
            roseType: 'radius',
            label: {
                color: '#626f86'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0)'
            }
        }
    ]
};