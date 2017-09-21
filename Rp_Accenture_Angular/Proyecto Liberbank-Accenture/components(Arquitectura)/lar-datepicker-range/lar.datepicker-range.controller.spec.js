define(function(require) {
    require('architectureApp/components/lar-datepicker-range/lar.datepicker-range.controller');

    describe('app: LarDatepickerController ->', function() {
        var LarDatepickerController;
        var mocks;
        var returnedValue;
        var vm;

        beforeEach(function() {
            LarDatepickerController = quickmock({
                providerName: 'LarDatepickerController',
                moduleName: 'architecture',
                mockModules: ['MocksForTest'],
            });

            mocks = LarDatepickerController.$mocks;
            vm = LarDatepickerController;
            returnedValue = null;
        });

        describe('checkDate', function() {
            it('should return message', function() {
                vm.dt = '09/11/2016';
                vm.dt2 = '09/10/2016';

                vm.checkdate();

                expect(vm.message).toBe('Recuerde que la fecha hasta debe ser mayor o igual que la fecha desde. Por favor, complete fecha hasta');
            });
            it('should return the selected checkDate', function() {
                vm.dt = '09/11/2016';
                vm.dt2 = '10/11/2016';

                vm.checkdate();

                expect(vm.error).toBe(false);
            });
            it('should return the selected checkDate', function() {
                vm.dt = '';

                vm.checkdate();

                expect(vm.dt).toBe('');
            });
            it('should return the selected checkDate', function() {
                vm.dt = '09/11/2016';
                vm.dt2 = '';

                vm.checkdate();

                expect(vm.message).toBe('Por favor, complete la fecha Hasta');
            });
        });
    });
});