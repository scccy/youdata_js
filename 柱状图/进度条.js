var data = [50];
var xMax = 100;
var kd = [];
// 刻度使用柱状图模拟，短设置3，长的设置5；构造一个数据
var option = {
    backgroundColor:'#508AFE',
    xAxis: [{
        show: false,
        min: 0,
        max: 70,
    }, {
        show: false,
        data: [],
        min: 0,
        max: 70,
    }],
    yAxis: [{
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }, {
        show: false,
        data: [],
    }, {
        show: false,
        min:-110,
        max: 100,
    }],
    series: [
        {
            name: ' ',
            type: 'bar',
            barWidth: 15,
            silent: true,
            barBorderRadius: 30,
            itemStyle: {
                normal: {
                    color: '#FFFFFF',
                    barBorderRadius: 30,
                }

            },
            barGap: '-100%',
            data: data.map(function(d) {
                return xMax
            }),
        },
        {
            name: ' ',
            type: 'bar',
            barWidth: 15,
            silent: true,
            yAxisIndex: 0,
            data: [{
                value: data[0],
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color:'#FFE143',
                    },
                }
            } ],
        },
    ]
};