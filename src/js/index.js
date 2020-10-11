'use strict'

import $ from 'jquery';

//BS4 components
import bootstrap from 'bootstrap';

//styles
import '../scss/style.scss';
import data from './data.js'

$(document).ready(function(){
    renderTable(data.items)
    let index;
    $('body').on('click', '.btn-show-detail', function() {
        index = $(this).data('index')
        renderDetail(data.items[index].detail);
    })

    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let flag5 = false;
    let flag6 = false;
    let flag7 = false;
    let flag8 = false;
    $('body').on('click', '.sort-info', function() {
        let num = parseInt($(this).text().replace(/[^\d]/g, ''));
        let items = data.items
        
        //от меньшего к большему
        if(num == 1 && !flag1) {
            items.sort((a, b) => a.info1 > b.info1 ? 1 : -1);
            flag1 = true;
            renderTable(items);
        } 
        else if(num == 2 && !flag2) {
            items.sort((a, b) => a.info2 > b.info2 ? 1 : -1);
            flag2 = true;
            renderTable(items);
        }
        else if(num == 3 && !flag3) {
            items.sort((a, b) => a.info3 > b.info3 ? 1 : -1);
            flag3 = true;
            renderTable(items);
        }
        else if(num == 4 && !flag4) {
            items.sort((a, b) => (a.info4[0] + a.info4[1] + a.info4[2]) > (b.info4[0] + b.info4[1] + b.info4[2]) ? 1 : -1);
            flag4 = true;
            renderTable(items);

        }
        else if(num == 5 && !flag5) {
            items.sort((a, b) => a.info5 > b.info5 ? 1 : -1);
            flag5 = true;
            renderTable(items);
        }
        else if(num == 6 && !flag6) {
            items.sort((a, b) => (a.info6[0] + a.info6[1] + a.info6[2]) > (b.info6[0] + b.info6[1] + b.info6[2]) ? 1 : -1);
            flag6 = true;
            renderTable(items);
        }
        else if(num == 7 && !flag7) {
            items.sort((a, b) => a.info7 > b.info7 ? 1 : -1);
            flag7 = true;
            renderTable(items);
        }
        else if(num == 8 && !flag8) {
            items.sort((a, b) => a.info8 > b.info8 ? 1 : -1);
            flag8 = true;
            renderTable(items);
        }

        //от большего к меньшему
        else if(num == 1 && flag1) {
            items.sort((a, b) => a.info1 < b.info1 ? 1 : -1);
            flag1 = false;
            renderTable(items);
        } 
        else if(num == 2 && flag2) {
            items.sort((a, b) => a.info2 < b.info2 ? 1 : -1);
            flag2 = false;
            renderTable(items);
        }
        else if(num == 3 && flag3) {
            items.sort((a, b) => a.info3 < b.info3 ? 1 : -1);
            flag3 = false;
            renderTable(items);
        }
        else if(num == 4 && flag4) {
            items.sort((a, b) => (a.info4[0] + a.info4[1] + a.info4[2]) < (b.info4[0] + b.info4[1] + b.info4[2]) ? 1 : -1);
            flag4 = false;
            renderTable(items);
        }
        else if(num == 5 && flag5) {
            items.sort((a, b) => a.info5 < b.info5 ? 1 : -1);
            flag5 = false;
            renderTable(items);
        }
        else if(num == 6 && flag6) {
            items.sort((a, b) => (a.info6[0] + a.info6[1] + a.info6[2]) < (b.info6[0] + b.info6[1] + b.info6[2]) ? 1 : -1);
            flag6 = false;
            renderTable(items);
        }
        else if(num == 7 && flag7) {
            items.sort((a, b) => a.info7 < b.info7 ? 1 : -1);
            flag7 = false;
            renderTable(items);
        }
        else if(num == 8 && flag8) {
            items.sort((a, b) => a.info8 < b.info8 ? 1 : -1);
            flag8 = false;
            renderTable(items);
        }

    })

    $('.year-control.rpm').on('change', function() {
        if(this.value == 'max') {
            let dataDetail = [];
            data.items[index].detail.map((item) => {
                dataDetail.push(item);
            })
            dataDetail.sort((a, b) => a.rfm > b.rfm ? 1 : -1);
            $('.year-control.cnt').val('')
            renderDetail(dataDetail);
        } 
        else if(this.value == 'min') {
            let dataDetail = [];
            data.items[index].detail.map((item) => {
                dataDetail.push(item);
            })
            dataDetail.sort((a, b) => a.rfm < b.rfm ? 1 : -1);
            $('.year-control.cnt').val('')
            renderDetail(dataDetail);
        }
    })

    $('.year-control.cnt').on('change', function() {
        if(this.value == 'max') {
            let dataDetail = [];
            data.items[index].detail.map((item) => {
                dataDetail.push(item);
            })
            dataDetail.sort((a, b) => a.orderAfter > b.orderAfter ? 1 : -1);
            $('.year-control.rpm').val('')
            renderDetail(dataDetail);
        } 
        else if(this.value == 'min') {
            let dataDetail = [];
            data.items[index].detail.map((item) => {
                dataDetail.push(item);
            })
            dataDetail.sort((a, b) => a.orderAfter < b.orderAfter ? 1 : -1);
            $('.year-control.rpm').val('')
            renderDetail(dataDetail);
        }
    })

    $('.rest-filter').on('click', function() {
        $('.year-control.rpm').val('');
        $('.year-control.cnt').val('');
        renderDetail(data.items[index].detail);
    })
    
});

const renderTable = (data) => {
    $('#myTabContent .tab-pane').each(function(){
        let table = '' + 
        '<tr class="tr-year">' +
            '<td colspan="11">' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="8" cy="8" r="6.5" stroke="#CDCDCD"/>' +
                    '<rect x="12" y="7" width="2" height="8" transform="rotate(90 12 7)" fill="#CDCDCD"/>' +
                '</svg>' +
                '<span>2018 год</span>' +
            '</td>'+
        '</tr>';
        data.map((item, index) => {
            table = table + '' +
            '<tr>' +
                '<td>' +
                    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M14 12H0V14H14V12Z" fill="#CDCDCD"/>' +
                        '<path d="M14 6H0V8H14V6Z" fill="#CDCDCD"/>' +
                        '<path d="M14 0H0V2H14V0Z" fill="#CDCDCD"/>' +
                    '</svg>' + 
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs">месяц</span>' +
                    '<span class="month">'+item.month+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-1">инфо 1</span>' +
                    '<span>'+item.info1+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-2">инфо 2</span>' +
                    '<span>'+item.info2+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-3">инфо 3</span>' +
                    '<span>'+item.info3+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-4">инфо 4</span>' +
                    '<ul class="table-list">' +
                        generateList(item.info4) +
                    '</ul>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-5">инфо 5</span>' +
                    '<span>'+item.info5+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-6">инфо 6</span>' +
                    '<ul class="table-list">' +
                        generateList(item.info6) +
                    '</ul>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-7">инфо 7</span>' +
                    '<span>'+item.info7+'</span>' +
                '</td>' +
                '<td>' +
                    '<span class="table-th-xs sort-info sort-info-8">инфо 8</span>' +
                    '<span>'+item.info8+'</span>' +
                '</td>' +
                '<td>' +
                    '<button class="btn btn-success btn-show-detail" data-index="'+ index +'">показать</button>' +
                '</td>' +
            '</tr>' 
        })

        $(this).find('tbody').html(table);
        renderMiddle($(this).find('tbody'), data)
    })
}

const generateList = (arr) => {
    let list = '';
    for(let i = 0; i < 3; i++) {
        if(arr[i]) {
            list += '<li>'+arr[i]+'</li>'
        } else {
            list += '<li>-</li>'
        }
        
    }
    return list;
}

const renderMiddle = (table, data) => {
    let totalInfo1 = 0;
    let totalInfo2 = 0;
    let totalInfo3 = 0;
    let totalInfo4 = [0,0,0];
    let totalInfo5 = 0;
    let totalInfo6 = [0,0,0];
    let totalInfo7 = 0;
    let totalInfo8 = 0;
    data.map((item) => {
        totalInfo1 += item.info1;
        totalInfo2 += item.info2;
        totalInfo3 += item.info3;
        for(let i = 0; i < 3; i++) {
            if(item.info4[i]) {
                totalInfo4[i] += item.info4[i] 
            }
        }
        totalInfo5 += item.info5;
        for(let i = 0; i < 3; i++) {
            if(item.info6[i]) {
                totalInfo6[i] += item.info6[i]
            }
        }
        totalInfo7 += item.info7;
        totalInfo8 += item.info8;
    })

    let middleInfo1 = Math.round(totalInfo1 / data.length);
    let middleInfo2 = Math.round(totalInfo2 / data.length);
    let middleInfo3 = Math.round(totalInfo3 / data.length);
    let middleInfo4 = [];
    for(let i = 0; i < 3; i++) {
        if(totalInfo4[i]) {
            middleInfo4[i] = Math.round(totalInfo4[i] / 12);
        }
    }
    
    let middleInfo5 = Math.round(totalInfo5 / data.length);
    let middleInfo6 = [];
    for(let i = 0; i < 3; i++) {
        if(totalInfo6[i]) {
            middleInfo6[i] = Math.round(totalInfo6[i] / data.length);
        }
    }
    let middleInfo7 = Math.round(totalInfo7 / data.length);
    let middleInfo8 = Math.round(totalInfo8 / data.length);
    table.append(
        '<tr class="result">' +
            '<td>' +
                
            '</td>' +
            '<td>' +
                '<span>Среднее</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо1</span>' +
                '<span>'+middleInfo1+'</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо2</span>' +
                '<span>'+middleInfo2+'</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо3</span>' +
                '<span>'+middleInfo3+'</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо4</span>' +
                '<ul class="table-list">' +
                    generateList(middleInfo4) +
                '</ul>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо5</span>' +
                '<span>'+middleInfo5+'</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо6</span>' +
                '<ul class="table-list">' +
                    generateList(middleInfo6) +
                '</ul>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо7</span>' +
                '<span>'+middleInfo7+'</span>' +
            '</td>' +
            '<td>' +
                '<span class="table-th-xs">инфо8</span>' +
                '<span>'+middleInfo8+'</span>' +
            '</td>' +
            '<td>' +
                
            '</td>' +
        '</tr>'
    )
}

const renderDetail = (data) => {
    $('#modalTabContent .tab-pane').each(function() {
        let table = ''
        data.map((item, index) => {
            let phone = item.phone.split(',');
            table += `<div class="m-table-tr">
                        <div class="m-table-td">
                            <div class="m-table-data">${++index}</div>
                        </div>
                        <div class="m-table-td">
                            <span class="table-th-xs">ФИО</span>
                            <div class="m-table-data">${item.userName}</div>
                        </div>
                        <div class="m-table-td">
                            <div class="table-th-xs">Телефон</div>
                            <div class="m-table-data">
                                <span class="phone">${phone[0]}</span>,
                                <span class="phone">${phone[1] ? phone[1] : '' }</span>
                            </div>
                        </div>
                        <div class="m-table-td">
                            <div class="table-th-xs">СЕГМЕНТ</div>
                            <div class="m-table-data">${item.productName}</div>
                        </div>
                        <div class="m-table-td">
                            <div class="table-th-xs">RFM</div>
                            <div class="m-table-data">${item.rfm}</div>
                        </div>
                        <div class="m-table-td">
                            <div class="table-th-xs">ПОЛУЧИЛ ТОВАР</div>
                            <div class="m-table-data">${item.date}</div>
                        </div>
                        <div class="m-table-td">
                            <div class="table-th-xs">ЗАКАЗОВ ПОСЛЕ</div>
                            <div class="m-table-data">${item.orderAfter}</div>
                        </div>    
                    </div>`
        })
        $(this).find('.m-table-body').html(table);
    })
    $('#modal-month').modal('show');
}