-- =====================================================================
-- LES VERGERS — Reconciliation v3 des suivis post-consommation.
-- Ecouflant avril : parent = 15/04 ; les 2 postes conso du 17/04 sont
-- DEPLACES sur le 15/04, puis 17/04 devient un controle post-conso.
-- Convertit les suivis en CONTROLES POST-CONSO (vraies dates), supprime
-- ces passages, ajoute les J+7 manquants. Idempotent / rejouable.
-- =====================================================================

-- Parent imp_rg_ecouflant_20260210 : 4 controles, 4 suivis supprimes
do $$ declare sc text; cc text; tech text; pl text; begin
  select site, contrat, technicien into sc, cc, tech from passages where id='imp_rg_ecouflant_20260210';
  if sc is null then raise notice 'parent imp_rg_ecouflant_20260210 introuvable'; return; end if;
  select string_agg(e.key, ', ' order by e.key) into pl
    from passages p, jsonb_each(case when jsonb_typeof(p.saisies::jsonb)='object' then p.saisies::jsonb else '{}'::jsonb end) e
   where p.id='imp_rg_ecouflant_20260210' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale');
  delete from passages where id in ('imp_rg_ecouflant_20260212', 'imp_rg_ecouflant_20260214', 'imp_rg_ecouflant_20260216', 'imp_rg_ecouflant_20260223');
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260210_0';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260210_0', cc, '12/02/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260210_1';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260210_1', cc, '14/02/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260210_2';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260210_2', cc, '16/02/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260210_3';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260210_3', cc, '23/02/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+7)', '[]', '[]', sc);
end $$;

-- Parent imp_rg_ecouflant_20260311 : 4 controles, 4 suivis supprimes
do $$ declare sc text; cc text; tech text; pl text; begin
  select site, contrat, technicien into sc, cc, tech from passages where id='imp_rg_ecouflant_20260311';
  if sc is null then raise notice 'parent imp_rg_ecouflant_20260311 introuvable'; return; end if;
  select string_agg(e.key, ', ' order by e.key) into pl
    from passages p, jsonb_each(case when jsonb_typeof(p.saisies::jsonb)='object' then p.saisies::jsonb else '{}'::jsonb end) e
   where p.id='imp_rg_ecouflant_20260311' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale');
  delete from passages where id in ('imp_rg_ecouflant_20260314', 'imp_rg_ecouflant_20260316', 'imp_rg_ecouflant_20260318', 'imp_rg_ecouflant_20260320');
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260311_0';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260311_0', cc, '14/03/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260311_1';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260311_1', cc, '16/03/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260311_2';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260311_2', cc, '18/03/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260311_3';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260311_3', cc, '20/03/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+7)', '[]', '[]', sc);
end $$;

-- Parent imp_rg_ecouflant_20260415 : 4 controles, 4 suivis supprimes ; MERGE conso depuis imp_rg_ecouflant_20260417
do $$ declare sc text; cc text; tech text; pl text; begin
  select site, contrat, technicien into sc, cc, tech from passages where id='imp_rg_ecouflant_20260415';
  if sc is null then raise notice 'parent imp_rg_ecouflant_20260415 introuvable'; return; end if;
  update passages set saisies = (
      coalesce(nullif(saisies,'')::jsonb,'{}'::jsonb) || (
        select coalesce(jsonb_object_agg(e.key, e.value),'{}'::jsonb)
          from passages src, jsonb_each(case when jsonb_typeof(src.saisies::jsonb)='object' then src.saisies::jsonb else '{}'::jsonb end) e
         where src.id='imp_rg_ecouflant_20260417' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale')))::text
   where id='imp_rg_ecouflant_20260415';
  select string_agg(e.key, ', ' order by e.key) into pl
    from passages p, jsonb_each(case when jsonb_typeof(p.saisies::jsonb)='object' then p.saisies::jsonb else '{}'::jsonb end) e
   where p.id='imp_rg_ecouflant_20260415' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale');
  delete from passages where id in ('imp_rg_ecouflant_20260417', 'imp_rg_ecouflant_20260419', 'imp_rg_ecouflant_20260421', 'imp_rg_ecouflant_20260428');
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260415_0';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260415_0', cc, '17/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260415_1';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260415_1', cc, '19/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260415_2';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260415_2', cc, '21/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_ecouflant_20260415_3';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_ecouflant_20260415_3', cc, '28/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+7)', '[]', '[]', sc);
end $$;

-- Parent imp_rg_st_sylvain_20260416 : 4 controles, 3 suivis supprimes
do $$ declare sc text; cc text; tech text; pl text; begin
  select site, contrat, technicien into sc, cc, tech from passages where id='imp_rg_st_sylvain_20260416';
  if sc is null then raise notice 'parent imp_rg_st_sylvain_20260416 introuvable'; return; end if;
  select string_agg(e.key, ', ' order by e.key) into pl
    from passages p, jsonb_each(case when jsonb_typeof(p.saisies::jsonb)='object' then p.saisies::jsonb else '{}'::jsonb end) e
   where p.id='imp_rg_st_sylvain_20260416' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale');
  delete from passages where id in ('imp_rg_st_sylvain_20260418', 'imp_rg_st_sylvain_20260420', 'imp_rg_st_sylvain_20260422');
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260416_0';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260416_0', cc, '18/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260416_1';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260416_1', cc, '20/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260416_2';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260416_2', cc, '22/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260416_3';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260416_3', cc, '29/04/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+7)', '[]', '[]', sc);
end $$;

-- Parent imp_rg_st_sylvain_20260512 : 4 controles, 3 suivis supprimes
do $$ declare sc text; cc text; tech text; pl text; begin
  select site, contrat, technicien into sc, cc, tech from passages where id='imp_rg_st_sylvain_20260512';
  if sc is null then raise notice 'parent imp_rg_st_sylvain_20260512 introuvable'; return; end if;
  select string_agg(e.key, ', ' order by e.key) into pl
    from passages p, jsonb_each(case when jsonb_typeof(p.saisies::jsonb)='object' then p.saisies::jsonb else '{}'::jsonb end) e
   where p.id='imp_rg_st_sylvain_20260512' and (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale');
  delete from passages where id in ('imp_rg_st_sylvain_20260514', 'imp_rg_st_sylvain_20260516', 'imp_rg_st_sylvain_20260518');
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260512_0';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260512_0', cc, '14/05/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260512_1';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260512_1', cc, '16/05/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260512_2';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260512_2', cc, '18/05/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+2)', '[]', '[]', sc);
  delete from reinterventions where id='reinv_imp_rg_st_sylvain_20260512_3';
  insert into reinterventions (id, contrat, date, technicien, poste, anomalie, statut, observations, actions, photos, site)
  values ('reinv_imp_rg_st_sylvain_20260512_3', cc, '25/05/2026', coalesce(tech,''), coalesce(pl,''), 'Non consommé', 'Terminé', 'Réintervention post-consommation (J+7)', '[]', '[]', sc);
end $$;

notify pgrst, 'reload schema';
-- Verif Ecouflant 15/04 : doit montrer 2 postes conso
select 'ecouflant 15/04 nb_conso' as info, (select count(*) from jsonb_each(case when jsonb_typeof(saisies::jsonb)='object' then saisies::jsonb else '{}'::jsonb end) e where (e.value->>'etat') in ('25%','50%','75%','100%','CONSOMMATION PARTIELLE','CONSOMMATION TOTALE','Totale')) as n from passages where id='imp_rg_ecouflant_20260415';
