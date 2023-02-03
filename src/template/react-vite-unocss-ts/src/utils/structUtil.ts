// @ts-ignore
import gcoord from 'gcoord'
export interface IdTableData {
  accounting_theory: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  air_control_technology_dust: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  pollution_source: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  pollution_source_form_water: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  pollution_source_form_air: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  pollution_source_form_air_unorganized: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  pollution_source_form_noise: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  frequency: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  standard_type: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  emr_triggler: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  material_kind: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  material_location: {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "material_packing": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "meterial_transport": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "meterial_state": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "meterial_fire_risk_level": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "meterial_danger_level": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "organic_solvent_purity": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "location_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "facilities_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "fuel_kind": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "fuel_kind_solid": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "fuel_kind_liquid": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "fuel_kind_gas": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "other": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "chemical_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "character_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "product_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
   
  },
  "chemical_use": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
    
  },
  "noise_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "monitoring_report_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "contract_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "operations_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "check_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "report_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "monitoring_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_sample_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_sample_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "monitor_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "surveil_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "production_cell_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "production_cell_main": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "production_technology": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "params_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_technology_sulphur": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_technology_nitre": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_technology_vocs": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_technology_stench": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_control_technology_other": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_control_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_control_technology": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_control_technology_primary": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_control_technology_secondary": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_control_technology_advanced": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_handle_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_kind": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_state": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_account_change": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "proper_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "enterprise_scale": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "enterprise_state": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "proper_rights": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "production_state": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "drain_whereabouts": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "drain_rule": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "drain_period": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_drain_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_drain_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "noise_drain_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "permit_management_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "outlet_kind": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "outlet_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "outlet_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "permit_kind": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "statistics_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_monitoring_items": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "monitor_point_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_monitoring_items": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "emr_content": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "emr_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "emr_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "cr_contents": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "manual_sample_method": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "order_product_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "order_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "payment_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "billing_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "project_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_level": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_reason": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_type_air": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_type_pms": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "alarm_type_fms": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "threshold_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "data_type": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
    
  },
  "data_cate": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
    
  },
  "data_item": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "illegal_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "punish_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_type_not_produce": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_type_not_produce": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "waste_type_not_produce": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "air_point_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_point_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_cate": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "water_quality": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "assess_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_cate": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_type_gy": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_type_sh": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_type_ny": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_type_qt": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_drain_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_water_feature": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_spec": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_test_type": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_period": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_envir": {
  
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  },
  "rdo_outlet_extend": {
    [key:string]: { id: string, code: string, name: string, attach: any[] | null }
  }
}

export class Table {
  isReady: boolean = false;
  isEmpty: boolean = false;
  data:IdTableData | {} = {};
  
  //id与key的对应关系
  ids = {};
  
  //key_code与id的对应关系
  keys = {};
  
  constructor (key: any, meta: any) {
    if (isNull(meta)) {
      // @ts-ignore
      this.isEmpty = true;
    } else {
      const table = {};
      if (key === 'unit') {
        // @ts-ignore
        table['unit'] = {};
        meta.forEach((v: any) => {
          // @ts-ignore
          table['unit'][v.id] = v;
          // @ts-ignore
          this.keys[`unit_${ v.code }`] = v.id;
          // @ts-ignore
          this.ids[v.id] = 'unit';
        })
      } else if (key === 'id') {
        meta.forEach((v: any) => {
          const items = {};
          v.items && v.items.forEach((i: any) => {
            // @ts-ignore
            items[i.id] = i
            // @ts-ignore
            this.keys[`${ v.cate }_${ i.code }`] = i.id;
            // @ts-ignore
            this.ids[i.id] = v.cate;
          });
          // @ts-ignore
          table[v.cate] = items;
        })
      }
      this.data = table;
      this.isReady = true;
    }
  }
  
  get = (key: any) => {
    let conf = {};
    let id = key;
    if (!/^[0-9]+$/.test(key)) {
      id = this.id(key);
      if (id === undefined) {
        return {};
      }
    }
    // @ts-ignore
    const tableName = this.ids[id];
    
    if (tableName) {
      // @ts-ignore
      const confs = this.data[tableName];
      conf = confs && confs[id] ? confs[id] : {}
    }
    
    return conf;
  };
  
  name = (key: any, func?: any) => {
    if (!key) return null;
    if (typeof key === 'string' || typeof key === 'number') {
      const item: any = this.get(key);
      return func ? func(item) : item.name ? item.name : null;
    } else if (key instanceof Array) {
      
      let arr = key.map((item) => {
        let handle: any = this.get(item);
        return handle.name ? handle.name : null
      })
      return arr ? arr : null;
    }
  };
  
  code = (key: any, func?: any) => {
    if (!/^[0-9]+$/.test(key)) {
      return null;
    }
    const item: any = this.get(key);
    return func ? func(item) : item.code ? item.code : null;
  };
  
  //from `name_code` get `id`
  id = (assembledKey: any) => {
    // @ts-ignore
    return this.keys[assembledKey];
  };
  
}

export function isNull (data: any) {
  if (!data) return true;
  if (data instanceof Array) return data.length === 0;
  if (data instanceof Object) return Object.keys(data).length === 0;
  if (typeof data === 'string') return data === '';
}
export function convertAxis (lng:string, lat:string) {
  let converted = gcoord.transform(
    [parseFloat(lng),parseFloat(lat)],
    gcoord.GCJ02,
    gcoord.WGS84,
  );
  return {
    lat: converted[1],
    lng: converted[0]
  }
}

